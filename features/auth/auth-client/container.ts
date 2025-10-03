// container.ts

import { AuthClientController } from "./auth.client.controller";
import { AuthClientRepo } from "./auth.client.repo";
import { AuthClientService } from "./auth.client.service";

const repository = new AuthClientRepo();

export const service = new AuthClientService(repository);
export const controller = new AuthClientController(service);