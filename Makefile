# Makefile
.PHONY: server
server:
	# WARNING: The indentation MUST be a tab. Spaces won't work.
	browser-sync start --server --files=index.html