# ADR Sprint 3

## Context

The game requires a multiplayer version. In order to allow multiplayer a server to host the players logins is required. The implementation of a web socket server is seen as a suitable method to host multiplayer logins. 


## Decision

The decision was made to use a Web Server Socket to host multiple players logged on to the wordle game at any point. This server will also host the word that is to be guessed and this assists with ensuring the safety of the game by not sending them to the client directly.

## Status

Accepted

## Consequences

The system now has the capabilities of running multiplayer and allowing a maximum of 3 users to login at the same time. This allows for 2 users to compete against each other once they've joined a lobby room. Consequently, the implementation of the web server also allows for the 3rd user to input a word that must be guessed by the other 2 players.