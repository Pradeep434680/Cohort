

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response(' hii this is dipolyed!');
	},
} satisfies ExportedHandler<Env>;


// export default {
// 	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
// 		console.log(request.body);
// 		console.log(request.headers);
		
// 		if (request.method === "GET") {
// 			return Response.json({
// 				message: "you sent a get request"
// 			});
// 		} else {
// 			return Response.json({
// 				message: "you did not send a get request"
// 			});
// 		}
// 	},
// } satisfies ExportedHandler<Env>;