# aspen-exercise

## Project setup
```
npm install
```

##Database: install PostgreSQL
```
psql
createdb war
```

### Starts Server
```
npm run start
```

###WIN RECORD: '/api/record'
###GAME PLAY: '/api/game'

### Stop Server and Run Basic Tests (same db)
```
npm run test
```

### Thanks for the opportunity to apply! I look forward to hearing from you.
 - Improvements:
      - Figure out the 5k round tie...feature! No one wants to play war for that long.
      - break up play into different methods
      - less this, less ifs, more maps, more methods
      - less repeats
      - Add code to handle tiebreaker when player has <2 cards
        -Currently when one player has <2, player with most cards wins
      - TESTS!UI!