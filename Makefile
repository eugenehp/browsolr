.PHONY : clean install build run

#executing all targets in series
all: clean install build run

#build the script using browserify, if node_modules directory exsits
build:
ifeq "$(wildcard $(node_modules) )" ""
	node_modules/.bin/browserify -r solr-client -r http-browserify -r console-browserify -o main.js
else
	@echo "Did you forget to run <make install> first?"
endif

#using Node Package Manager to install dependencies 
install:
	npm install

#remove all modules and compiles script
clean:
	rm -rf node_modules/*

# open example in the browser
# please make sure you have solr running
# you can use example directory of solr 4.5.1
# cd example && java -jar start.jar
run:
	open "http://localhost:8983/solr/#/~cores/collection1"
	open index.html