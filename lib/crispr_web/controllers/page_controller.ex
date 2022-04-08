defmodule CrisprWeb.PageController do
  use CrisprWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
