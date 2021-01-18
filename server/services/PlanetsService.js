import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {
  async find(query = {}) {
    let values = await dbContext.Planets.find(query);
    return values;
  }
  async findById(id) {
    let value = await dbContext.Planets.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
  async create(planet) {
    return await dbContext.Planets.create(planet)
  }
  async delete(id) {
    let deleted = await dbContext.Planets.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }
}

export const planetsService = new PlanetsService();