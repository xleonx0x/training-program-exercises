# Installation

Once you have an environment to code in we will need to install a few things before we can get going.

## Git

Git is a version control system that tracks changes to a set of computer files which is usually used for coordinating work among programmers who are collaboratively developing source code. Git itself isn't too handy but when paired with a Git provider like GitHub and GitLab it becomes extremely powerful.

This guide will not cover how to work and use Git. If you want to learn how to use Git please read this [Git Basics Guide](https://gist.github.com/jeremyle56/f3b664f0491d6ec0d9a03ab34780b876).

### Installing Git on macOs

If you're using macOS, open a terminal and enter the following command:

```sh
brew install git
```

This command will use [Homebrew](https://brew.sh/) to install git. Git may already be installed on your system, however this will ensure you have a more updated version.

### Installing Git on Linux

If you followed the previous guide your Window's setup should now be running WSL and you will be coding within a linux sub shell. To install Git run the following commands in a terminal:

```sh
sudo apt update && sudo apt upgrade
sudo apt install git
```

## Node and Node Package Manager (NPM)

Throughout this course we will be working with JavaScript, TypeScript and the React framework which all involve using both Node and NPM. The best way to install this is to use [Node Version Manager](https://github.com/nvm-sh/nvm) (NVM) which allows you to change your node version at will.

### Installing NVM

We will be following the installation documentation found [here](https://github.com/nvm-sh/nvm).

To install nvm, we can use the following cURL or Wget command (pick one):

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Either of these commands will download a script and run it. The script clones the nvm repository to `~/.nvm`, and attempts to add the source lines from the snippet below to the correct profile file (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`).

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Please ensure that this snippet is included in your shell config file or else nvm will not work.

### Installing Node and NPM

We can now install any version of node we wish to have. To simply install the latest version run

```sh
nvm install node # "node is an alias for the latest version"
```

Note that NVM will install both node and NPM.

If you wish to install or switch between versions please read through the documentation found [here](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating).

## Troubleshooting

To check whether Git, Node of NPM has been installed correctly we can open a terminal and type the respective lines

```sh
$ git --version
$ node --version
$ npm --version
```

If you see something similar the code below, then your installation is successful.

```sh
$ git version 2.43.0
$ v18.12.1
$ 9.8.1
```
