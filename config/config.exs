# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

# Configures the endpoint
config :crispr, CrisprWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "4QKqmP/ISZm6KK8CE3F1pXQ68YZ3NzbCdq2KjCw3FE4lRbh5nykqb81n7COKjHiX",
  render_errors: [view: CrisprWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Crispr.PubSub,
  live_view: [signing_salt: "emZ0W0jh"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
