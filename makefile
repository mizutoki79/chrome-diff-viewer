extension_name := chrome-diff-viewer
release:
	npm run build
	mkdir -p ./package
	rm -f ./package/${extension_name}.zip
	cd ./dist; zip --recurse-paths ../package/${extension_name}.zip ./*
