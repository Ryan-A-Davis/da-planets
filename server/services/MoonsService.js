import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonsService {
  async find(query = {}) {
    let values = await dbContext.Stars.find(query);
    return values;
  }
  async findById(id) {
    let value = await dbContext.Stars.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const moonsService = new MoonsService();