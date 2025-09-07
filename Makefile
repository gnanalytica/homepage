# Gnanalytica Website Makefile
# Essential development commands

.PHONY: help install start stop restart

# Default target
help: ## Show this help message
	@echo "Gnanalytica Website - Available Commands:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

# Essential commands
install: ## Install dependencies
	@echo "📦 Installing dependencies..."
	npm install

start: ## Start development server
	@echo "🚀 Starting development server..."
	@echo "Server will be available at http://localhost:3000"
	npm run dev

stop: ## Stop development server and kill process on port 3000
	@echo "🛑 Stopping development server..."
	@if lsof -ti:3000 > /dev/null 2>&1; then \
		echo "Killing process on port 3000..."; \
		lsof -ti:3000 | xargs kill -9; \
		echo "✅ Server stopped"; \
	else \
		echo "ℹ️  No process running on port 3000"; \
	fi

restart: stop start ## Restart development server (stop then start)

# Default target when no arguments provided
.DEFAULT_GOAL := help
