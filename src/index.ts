import { Plugin } from "vite";
import { runGitCommand } from "./helpers/run-git-command";

const COMMITHASH_COMMAND = "rev-parse HEAD";
const VERSION_COMMAND = "describe --always";
const BRANCH_COMMAND = "rev-parse --abbrev-ref HEAD";
const DATETIME_COMMAND =
  "log -1 --date=format:'%Y-%m-%d %H:%M' --pretty=format:'%ad'";

const defaultOpt = {
  lightweightTags: false,
  branch: false,
  commithashCommand: COMMITHASH_COMMAND,
  versionCommand: VERSION_COMMAND,
  branchCommand: BRANCH_COMMAND,
  datetimeCommand: DATETIME_COMMAND,
};

export interface ViteGitRevisionPlugin {
  // git work tree
  gitWorkTree?: any;
  // lightweight tags support.
  lightweightTags?: boolean;
  // branch name support
  branch?: boolean;
  // change the default git command used to read the value of COMMITHASH
  commithashCommand?: string;
  // change the default git command used to read the value of VERSION
  versionCommand?: string;
  // change the default git command used to read the value of BRANCH
  branchCommand?: string;
  // change the default git command used to read the DATE and TIME of the commit
  datetimeCommand?: string;
}

export default function GitRevision(options: ViteGitRevisionPlugin): Plugin {
  if (options.versionCommand && options.lightweightTags) {
    throw new Error("lightweightTags can't be used together versionCommand");
  }

  options = Object.assign(defaultOpt, options ? options : {});

  return {
    name: "vite:git-revision",
    config(config: any) {
      const { define = {} } = config;

      config.define = {
        ...define,
        GITVERSION: JSON.stringify(
          runGitCommand(options.gitWorkTree, options.versionCommand)
        ),
        GITCOMMITDATETIME: JSON.stringify(
          runGitCommand(options.gitWorkTree, options.datetimeCommand)
        ),
      };
    },
  };
}
