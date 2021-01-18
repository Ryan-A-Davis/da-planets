import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxiesService {
  async find(query = {}) {
    let galaxies = await dbContext.Galaxies.find(query);
    return galaxies;
  }
  async findById(id) {
    let galaxy = await dbContext.Galaxies.findById(id);
    if (!galaxy) {
      throw new BadRequest("Invalid Id");
    }
    return galaxy;
  }
  async create(galaxy) {
    return await dbContext.Galaxies.create(galaxy)
  }
  async delete(id) {
    let deleted = await dbContext.Galaxies.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }
}

export const galaxiesService = new GalaxiesService();