develop:
	npx webpack-dev-server

start-frontend:
	NODE_ENV=production npx webpack serve

build:
	rm -rf dist
	NODE_ENV=production npx webpack

lint:
	npx eslint .