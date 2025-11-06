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
    echo ""
    echo "Para instalar o CapRover CLI localmente:"
    echo "  npx caprover deploy"
    echo ""
    echo "Ou instale globalmente no projeto:"
    echo "  npm install caprover"
    echo "  npx caprover deploy"
    echo ""
    
    # Adiciona node_modules/.bin ao PATH para usar binários npm locais
    export PATH="$PWD/node_modules/.bin:$PATH"
  '';
}
