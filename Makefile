SHELL := /bin/bash
OUT = @echo `date +[\ %F\ -\ %T\ ]`

.PHONY: all watch

all: tags
	@true

tags: ctags index.js
	@ctags -f tags index.js
	$(OUT) "'tags' file updated."

watch:
	$(OUT) "Watching..."
	@while sleep 1; do make tags -s; done
