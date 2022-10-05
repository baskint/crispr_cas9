import Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :crispr_cas9, CrisprCas9Web.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "UMBe9OW/aII2tQwfl2PKvYrUorAIsnivi7h8kKCaUBEk9VmhYXwYG0u88/D80S0K",
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
