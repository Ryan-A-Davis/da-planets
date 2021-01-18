import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {
  async find(query = {}) {
    let stars = await dbContext.Stars.find(query);
    return stars;
  }
  async findById(id) {
    let star = await dbContext.Stars.findById(id);
    if (!star) {
      throw new BadRequest("Invalid Id");
    }
    return star;
  }
  async create(star) {
    return await dbContext.Stars.create(star)
  }
  async delete(id) {
    let deleted = await dbContext.Stars.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }
}

export const starsService = new StarsService();