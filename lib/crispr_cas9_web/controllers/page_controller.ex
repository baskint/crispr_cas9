defmodule CrisprCas9Web.PageController do
  use CrisprCas9Web, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
