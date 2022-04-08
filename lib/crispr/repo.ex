defmodule Crispr.Repo do
  use Ecto.Repo,
    otp_app: :crispr,
    adapter: Ecto.Adapters.Postgres
end
