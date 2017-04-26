var orm = require("./config/orm.js");

// Find all parties, ordering them by party cost
orm.selectAndOrder("party_name", "parties", "party_cost", "DESC");

// Find partie15.s by the name of the party
orm.selectWhere("parties", "party_name", "Big Bang Theory");

// Find the client with the most parties
orm.findWhoHasMost("client_name", "client_id", "clients", "parties");
