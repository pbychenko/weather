install: install-deps install-flow-typed

develop:
	npx webpack-dev-server

install-deps:
	npm install

start-frontend:
	NODE_ENV=production npx webpack serve

build:
	rm -rf dist
	NODE_ENV=production npx webpack
	
publish: 
	npm publish --dry-run

lint:
	npx eslint .