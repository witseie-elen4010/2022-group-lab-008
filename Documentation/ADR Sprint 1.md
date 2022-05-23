# ADR Sprint 1

## Context

The project brief required a clone of ‘WORDLE’ to be constructed. The clone needs to be made using node.js, express, and a data storage API such as mongo. 

## Decision

The webpage is made such that the game is outputted using HTML and the server is built using node.js. The first sprint is built using a single .js file, ‘wordle.js’. This is to keep the initial sprint within achievable scope. The structure of the guess grid and the keyboard are created in the HTML file such that only the content and colour can be changed within the wordle.js file. 

## Status

Accepted

## Consequences

The choice of limiting the .js and .html files to one file each means that express cannot be used. This is because there is currently only one route. This prevents the program from currently having a system such that it can jump from one page to another. For instance, when one logs in and moves to the game page. The guess grid and keyboard being hardcoded into the .HTML file has protected the team from creating bugs, however, this exposes an excessive amount of code to the client. 

Both decisions will likely be revised within the following sprints. 