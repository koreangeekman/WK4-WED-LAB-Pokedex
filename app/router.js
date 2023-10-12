import { PokedexController } from "./controllers/PokedexController.js";
import { SandboxController } from "./controllers/SandboxController.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [PokedexController, SandboxController],
    // @ts-ignore
    view: null
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */