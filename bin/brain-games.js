#!/usr/bin/env node

import { startGame } from "../src/cli.js";
import { brainEven } from "./brain-even.js";

const username = startGame();
brainEven(username);