run: build
	deno run --import-map import_map.json --no-check --no-prompt -A server.ts
	
build:
	../target/debug/qwik optimize --dest out -s src --extensions --strategy hook

