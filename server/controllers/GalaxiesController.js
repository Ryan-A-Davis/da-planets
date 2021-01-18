import express from "express";
import BaseController from "../utils/BaseController";
import { galaxiesService } from "../services/GalaxiesService";
import { starsService } from "../services/StarsService"

export class GalaxiesController extends BaseController {
  constructor() {
    super("api/galaxies");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/stars", this.getStars)
      .post("", this.create)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      let data = await galaxiesService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await galaxiesService.findById(req.params.id)
    } catch (error) {
      next(error)
    }
  }
  async getStars(req, res, next) {
    try {
      let data = await starsService.find({ galaxy: req.params.id })
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await galaxiesService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await galaxiesService.delete(req.params.id)
      res.send("delorted")
    } catch (error) {
      next(error)
    }
  }
}