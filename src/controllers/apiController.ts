import { Request, Response } from "express";

// Mock data that API would return
const mockData = {
  message: "This is some data from the API",
};

export const apiController = {
  getData: (req: Request, res: Response) => {
    res.json(mockData);
  },
};
