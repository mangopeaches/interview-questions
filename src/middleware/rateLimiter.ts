import { Request, Response, NextFunction } from "express";

interface ClientRecord {
  requests: number;
  firstRequestTime: number;
}

// Configuration for rate-limiting
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window
const MAX_REQUESTS = 5; // Maximum 5 requests per minute

// In-memory store to track client requests
const clients: Record<string, ClientRecord> = {};

export const rateLimiter = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clientIp = req.ip || "";

  // Current timestamp
  const currentTime = Date.now();

  // Check if the client has made previous requests
  if (clients[clientIp]) {
    const { requests, firstRequestTime } = clients[clientIp];

    // If within the rate-limiting window
    if (currentTime - firstRequestTime < RATE_LIMIT_WINDOW_MS) {
      if (requests >= MAX_REQUESTS) {
        // Too many requests, block the request
        return res.status(429).json({
          message: `Rate limit exceeded. Try again in ${
            (RATE_LIMIT_WINDOW_MS - (currentTime - firstRequestTime)) / 1000
          } seconds.`,
        });
      } else {
        // Increment the request count
        clients[clientIp].requests++;
      }
    } else {
      // Reset the client's request counter and time window
      clients[clientIp] = { requests: 1, firstRequestTime: currentTime };
    }
  } else {
    // First request from the client, set up the initial record
    clients[clientIp] = { requests: 1, firstRequestTime: currentTime };
  }

  // Proceed to the next middleware or route handler
  next();
};
