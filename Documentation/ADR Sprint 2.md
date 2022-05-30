# ADR Sprint 2

## Context

File system structure required reviewing to permit adequate and sustainable testing. The original choice of file system
was monolithic and not suited to scalability. 

Express was to be implemented to perform routing for all pages. The choice of routing system needed to be determined.
An examples of such system for express is EJS. 

## Decision

The decision was made to make the code more modular. This would be done by completely redesigning the file structure, while 
keeping underlying logic. The change required a pause from implementation to ensure all developers were at the latest version.

The decision was made to use EDS and its .ejs dynamic web page functionality to perform the routing for the system. 

## Status

Accepted

## Consequences

The system is better suited to running on the Azure platform as express has been implemented properly. This allows the implementation of the database
to commence. The restructuring caused a pause in work on the code to avoid merge conflicts when the team was working on 
further developer stories, however, going forward testing and additions to the codebase will be more streamlined.

The decisions are subject to change in the final sprint if the requirements of the multiplayer functionality require it. 