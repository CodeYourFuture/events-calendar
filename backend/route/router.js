const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");

// parse the post request as json
var json_body_parser = bodyParser.json();
var urlencoded_body_parser = bodyParser.urlencoded({ extended: true });
router.use(json_body_parser);

const { Pool } = require("pg");

const buildurl = (api, path) => `/${api}/${path}`;

const EVENTS_BASE_URL = buildurl("api", "events");

const FLOATERS_BASE_URL = buildurl("api", "mentors");

const EVENTS_FLOATERS_BASE_URL = buildurl("api", "events-floaters");

var connectionString =
  "postgres://eventsuser:eventsuser147@localhost:5432/events_calendar";

const pool = new Pool({ connectionString: connectionString });

pool.connect(function(connectionError, poolClient) {
  if (connectionError) {
    console.log("Failed to connect to database: " + connectionError);
  } else {
    console.log("Connected to database");
  }
});

// events router

router.get(EVENTS_BASE_URL, (httpRequest, httpResponse) => {
  // console.log(EVENTS_BASE_URL);
  pool.query(
    "SELECT event_id, lesson, event_date as date, description FROM events_tbl ORDER BY event_date ASC",
    (dbError, dbResult) => {
      if (dbError) {
        httpResponse.status(400).send(dbError);
      } else {
        httpResponse.status(200).send(dbResult.rows);
      }
    }
  );
});

router.get(`${EVENTS_BASE_URL}/:id`, function(httpRequest, httpResponse) {
  const id = httpRequest.params.id;
  const query = {
    text: `SELECT event_id, lesson, event_date as date, description FROM events_tbl WHERE events_tbl.event_id = ${id};`
  };
  pool.query(query, (dbError, dbResult) => {
    if (dbError) {
      httpResponse.status(500).send(dbError);
    } else {
      httpResponse.status(200).send(dbResult.rows[0]);
    }
  });
});

router.post(`${EVENTS_BASE_URL}`, (httpRequest, httpResponse) => {
  const query = {
    text:
      "INSERT INTO events_tbl(lesson, event_date, description) VALUES($1, $2, $3)",
    values: [
      httpRequest.body.lesson,
      httpRequest.body.event_date,
      httpRequest.body.description
    ]
  };
  //callback;
  pool.query(query, (dbError, response) => {
    if (dbError) {
      httpResponse.status(500).send(dbError);
    } else {
      httpResponse.status(200).send("OK");
    }
  });
});
router.delete(`${EVENTS_BASE_URL}/:id`, (httpRequest, httpResponse) => {
  const id = httpRequest.params.id;
  const query = {
    text: `DELETE FROM public.events_tbl WHERE public.events_tbl.event_id = ${id};`
  };
  pool.query(query, (dbError, dbResult) => {
    if (dbError) {
      httpResponse.status(500).send(dbError);
    } else {
      httpResponse.status(200).send("OK");
    }
  });
});

router.put(`${EVENTS_BASE_URL}/:id`, (httpRequest, httpResponse) => {
  const id = httpRequest.params.id;
  const query = {
    text:
      "UPDATE public.events_tbl SET lesson = $1, event_date = $2, description = $3 WHERE event_id = $4;",
    values: [
      httpRequest.body.lesson,
      httpRequest.body.event_date,
      httpRequest.body.description,
      id
    ]
  };
  pool.query(query, (dbError, dbResult) => {
    if (dbError) {
      httpResponse.status(500).send(dbError);
    } else {
      httpResponse.status(200).send("OK");
    }
  });
});

// mentors router

router.get(FLOATERS_BASE_URL, (httpRequest, httpResponse) => {
  pool.query(
    "SELECT  floater_id, floater_fname, floater_surname, floater_email FROM floaters_tbl ORDER BY floater_id",
    (dbError, dbResult) => {
      if (dbError) {
        console.log(dbError);
        httpResponse.status(400).send(dbError);
      } else {
        httpResponse.status(200).send(dbResult.rows);
      }
    }
  );
});

router.get(`${FLOATERS_BASE_URL}/:id`, (httpRequest, httpResponse) => {
  const id = httpRequest.params.id;
  const query = {
    text: `SELECT  floater_id, floater_fname, floater_surname, floater_email FROM floaters_tbl WHERE floaters_tbl.floater_id = ${id};`
  };
  pool.query(query, (dbError, dbResult) => {
    if (dbError) {
      httpResponse.status(500).send(dbError);
    } else {
      httpResponse.status(200).send(dbResult.rows[0]);
    }
  });
});
router.put(`${FLOATERS_BASE_URL}/:id`, (httpRequest, httpResponse) => {
  const id = httpRequest.params.id;
  const query = {
    text: ` UPDATE floaters_tbl SET floater_fname = '${
      httpRequest.body.floater_fname
    }', floater_surname = '${
      httpRequest.body.floater_surname
    }', floater_email = '${
      httpRequest.body.floater_email
    }' WHERE floater_id = ${id};`
  };
  pool.query(query, (dbError, dbResult) => {
    if (dbError) {
      httpResponse.status(500).send(dbError);
    } else {
      httpResponse.status(200).send("OK");
    }
  });
});
router.post(`${FLOATERS_BASE_URL}`, (httpRequest, httpResponse) => {
  const query = {
    text:
      "INSERT INTO public.floaters_tbl(floater_fname, floater_surname, floater_email) VALUES($1, $2, $3)",
    values: [
      httpRequest.body.floater_fname,
      httpRequest.body.floater_surname,
      httpRequest.body.floater_email
    ]
  };
  //callback;
  pool.query(query, (dbError, dbResult) => {
    if (dbError) {
      httpResponse.status(500).send(dbError);
    } else {
      httpResponse.status(200).send("OK");
    }
  });
});
router.delete(`${FLOATERS_BASE_URL}/:id`, (httpRequest, httpResponse) => {
  const id = httpRequest.params.id;
  const query = {
    text: `DELETE FROM public.floaters_tbl WHERE public.floaters_tbl.floater_id = ${id};`
  };
  pool.query(query, (dbError, dbResult) => {
    if (dbError) {
      httpResponse.status(500).send(dbError);
    } else {
      httpResponse.status(200).send("OK");
    }
  });
});
// events-floaters router
router.get(EVENTS_FLOATERS_BASE_URL, (httpRequest, httpResponse) => {
  pool.query(
    "SELECT floaters_events_id, event_id, floater_id FROM floaters_events_tbl;",
    (dbError, dbResult) => {
      if (dbError) {
        console.log(dbError);
        httpResponse.status(400).send(dbError);
      } else {
        httpResponse.status(200).send(dbResult.rows);
      }
    }
  );
});
router.get(`${EVENTS_FLOATERS_BASE_URL}/:id`, (httpRequest, httpResponse) => {
  const id = httpRequest.params.id;
  const query = {
    text: `SELECT floaters_events_id, event_id, floater_id FROM public.floaters_events_tbl WHERE floaters_events_tbl.floaters_events_id = ${id};`
  };
  pool.query(query, (dbError, dbResult) => {
    if (dbError) {
      httpResponse.status(500).send(dbError);
    } else {
      httpResponse.status(200).send(dbResult.rows[0]);
    }
  });
});
router.post(`${EVENTS_FLOATERS_BASE_URL}`, (httpRequest, httpResponse) => {
  const query = {
    text:
      "INSERT INTO public.floaters_events_tbl(event_id, floater_id) VALUES($1, $2)",
    values: [httpRequest.body.event_id, httpRequest.body.floater_id]
  };
  //callback;
  pool.query(query, (dbError, dbResult) => {
    if (dbError) {
      httpResponse.status(500).send(dbError);
    } else {
      httpResponse.status(200).send("OK");
    }
  });
});
router.delete(
  `${EVENTS_FLOATERS_BASE_URL}/:id`,
  (httpRequest, httpResponse) => {
    const id = httpRequest.params.id;
    const query = {
      text: `DELETE FROM public.floaters_events_tbl WHERE floaters_events_tbl.floater_id = ${id};`
    };
    pool.query(query, (dbError, dbResult) => {
      if (dbError) {
        httpResponse.status(500).send(dbError);
      } else {
        httpResponse.status(200).send("OK");
      }
    });
  }
);
router.put(`${EVENTS_FLOATERS_BASE_URL}/:id`, (httpRequest, httpResponse) => {
  const id = httpRequest.params.id;
  const query = {
    text: `UPDATE public.floaters_events_tbl SET event_id = '${
      httpRequest.body.event_id
    }', floater_id = '${
      httpRequest.body.floater_id
    }' WHERE floaters_events_id = ${id};`
  };
  pool.query(query, (dbError, dbResult) => {
    if (dbError) {
      httpResponse.status(500).send(dbError);
    } else {
      httpResponse.status(200).send("OK");
    }
  });
});

router.get(
  `${EVENTS_FLOATERS_BASE_URL}/event/:id`,
  (httpRequest, httpResponse) => {
    const id = httpRequest.params.id;
    const query = {
      text: `SELECT floater_fname, floater_surname, floaters_events_id, public.floaters_events_tbl.event_id, public.floaters_events_tbl.floater_id FROM public.floaters_events_tbl INNER JOIN public.floaters_tbl ON (public.floaters_events_tbl.floater_id = public.floaters_tbl.floater_id) WHERE floaters_events_tbl.event_id = ${id} ;`
    };
    pool.query(query, (dbError, dbResult) => {
      if (dbError) {
        httpResponse.status(500).send(dbError);
      } else {
        httpResponse.status(200).send(dbResult.rows);
      }
    });
  }
);
module.exports = router;
