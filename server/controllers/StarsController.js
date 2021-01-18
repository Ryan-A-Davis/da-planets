import express from "express";
import BaseController from "../utils/BaseController";
import { starsService } from "../services/StarsService"
import { planetsService } from "../services/PlanetsService"

export class StarsController extends BaseController {
  constructor() {
    super("api/stars");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/planets", this.getPlanets)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      let data = await starsService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await starsService.findById(req.params.id)
    } catch (error) {
      next(error)
    }
  }
  async getPlanets(req, res, next) {
    try {
      let data = await planetsService.find({ planet: req.params.id })
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await starsService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await starsService.delete(req.params.id)
      res.send("delorted")
    } catch (error) {
      next(error)
    }
  }
}