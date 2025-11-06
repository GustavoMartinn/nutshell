{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_22
    nodePackages.npm
    git
    docker
  ];

  shellHook = ''
    echo "🚀 Ambiente de desenvolvimento In a Nutshell"
    echo "Node version: $(node --version)"
    echo "NPM version: $(npm --version)"
    echo "Instale as dependências do projeto com:"
    echo "  npm install"
    echo ""
    echo "Para implantar no CapRover, use o comando:"
    echo "  npx caprover deploy"
    echo ""
    
    # Adiciona node_modules/.bin ao PATH para usar binários npm locais
    export PATH="$PWD/node_modules/.bin:$PATH"
  '';
}
