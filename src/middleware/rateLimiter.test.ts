import express from "express";
import { rateLimiter } from "./rateLimiter";

// // Configuration for rate-limiting
// const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window
// const MAX_REQUESTS = 5; // Maximum 5 requests per minute

describe("rateLimiter", () => {
  it("should not rate limit on a single request", () => {
    // const req: Partial<express.Request> = {
    //   ip: "123.23.23.23",
    // };
    // const res: Partial<express.Response> = {};
    // const next = jest.fn();

    // rateLimiter(RATE_LIMIT_WINDOW_MS, MAX_REQUESTS)(req, res, next);
    // expect(next).toHaveBeenCalled();
    expect(true).toEqual(false);
  });

  // it("should rate limit when threshold is exceeded", () => {
  //   const req: Partial<express.Request> = {
  //     ip: "123.23.23.23",
  //   };
  //   const status = jest.fn();
  //   const res: Partial<express.Response> = {
  //     status,
  //   };
  //   const next = jest.fn();

  //   for (let i; i < 5; i++) {
  //     rateLimiter(1, 1)(req, res, next);
  //   }
  //   expect(next).not.toHaveBeenCalled();
  //   expect(status).toHaveBeenCalledNTimes(4);
  // });
});
