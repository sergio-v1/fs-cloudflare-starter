import { WorkerEntrypoint } from 'cloudflare:workers';
import {App} from "@/server/app";

export default class DataService extends WorkerEntrypoint<Env> {
	fetch(request: Request) {
		return App.fetch(request);
	}
}
