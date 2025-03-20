import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const healthcheck = asyncHandler(async (req, res) => {
  return res.satus(200).json(new ApiResponse(200, "OK", "Health Check Pass!"));
});

export { healthcheck };
