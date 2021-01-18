import express from "express";
import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService"
import { moonsService } from "../services/MoonsService"

export class PlanetsController extends BaseController {
  constructor() {
    super("api/planets");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/moons", this.getMoons)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      let data = await planetsService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await planetsService.findById(req.params.id)
    } catch (error) {
      next(error)
    }
  }
  async getMoons(req, res, next) {
    try {
      let data = await moonsService.find({ moon: req.params.id })
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await planetsService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await planetsService.delete(req.params.id)
      res.send("delorted")
    } catch (error) {
      next(error)
    }
  }
}