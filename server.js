const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const favicon = require('serve-favicon');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');
const port = 8080;

const dbConfig = {
  host: 'DESKTOP-SABJM8E', 
  user: 'root', 
  password: 'laptedesoia', 
  database: 'MYDATABASE', 
}

const pool = mysql.createPool(dbConfig);

const faviconPath = "C:/Users/Anais/Downloads/favicon-32x32.ico";

app.use(cors({ origin: '*' }));
app.use(favicon(faviconPath));
app.use(express.json());

/*app.use(session({ secret: 'your-secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: '991452617729-gignefo5tm3v6d4npd2g5l28f5gjrvog.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:8080/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('http://localhost:3000');
  }
);*/

const upload = multer({dest: "C:/Users/Anais/OneDrive/Desktop/Proiect Note Requests/uploads"});

app.get('/api/data', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    connection.query('SELECT * FROM Student', (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      res.json(results);
    });
  });
});

app.get('/notes', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    connection.query('SELECT * FROM Note', (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      res.json(results);
    });
  });
});

app.get('/profile/:userid', (req, res) => {
  const userId = req.params.userid;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    connection.query('SELECT * FROM Student WHERE id = ?', [userId], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      res.json(results);
    });
  });
});

app.get('/usernotes/:myname', (req, res) => {
  const myname = req.params.myname;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    connection.query('SELECT * FROM Note WHERE userid = (SELECT id FROM Student WHERE email = ?)', [myname], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }
      res.json(results);
    });
  });
});

app.get('/ownnotes/:userid', (req, res) => {
  const userId = req.params.userid;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    connection.query('SELECT * FROM Note WHERE userid = ?', [userId], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      res.json(results);
    });
  });
});

app.get('/owngroups/:userid', (req, res) => {
  const userId = req.params.userid;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    connection.query('SELECT * FROM Studygroup WHERE creatoruserid = ?', [userId], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      res.json(results);
    });
  });
});

app.get('/group/:groupid', (req, res) => {
  const groupId = req.params.groupid;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    connection.query('SELECT * FROM Studygroup WHERE id = ?', [groupId], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      res.json(results);
    });
  });
});

app.get('/participants/:groupid', (req, res) => {
  const groupId = req.params.groupid;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    const query = `
      SELECT s.email
      FROM Participant p
      JOIN Student s ON p.userid = s.id
      WHERE p.groupid = ?;
    `;

    connection.query(query, [groupId], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      res.json(results);
    });
  });
});

app.get('/userparticipants/:userid', (req, res) => {
  const userId = req.params.userid;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    const query = 'SELECT * FROM Participant WHERE userid = ?';

    connection.query(query, [userId], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      res.json(results);
    });
  });
});

app.get('/groupnotes/:groupid', (req, res) => {
  const groupId = req.params.groupid;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    const query = 'SELECT * FROM Groupnote WHERE groupid = ?';

    connection.query(query, [groupId], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      res.json(results);
    });
  });
});

app.get('/notestag/:mytag', (req, res) => {
  const mytag = req.params.mytag;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    connection.query('SELECT noteid FROM Tag WHERE tagtext LIKE CONCAT("%", ?, "%")', [mytag], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      res.json(results);
    });
  });
});

app.get('/notescourse/:mycoursename', (req, res) => {
  const mycoursename = req.params.mycoursename;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    connection.query('SELECT * FROM Note WHERE coursename LIKE CONCAT("%", ?, "%")', [mycoursename], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      res.json(results);
    });
  });
});

app.get('/notestext/:mytext', (req, res) => {
  const mytext = req.params.mytext;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    connection.query('SELECT * FROM Note WHERE text LIKE CONCAT("%", ?, "%")', [mytext], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      res.json(results);
    });
  });
});

app.get('/notesdate/:mydate', (req, res) => {
  const mydate = req.params.mydate;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    connection.query('SELECT * FROM Note WHERE date = ?', [mydate], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      res.json(results);
    });
  });
});

app.get('/note/:noteid', (req, res) => {
  const noteId = req.params.noteid;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    connection.query('SELECT * FROM Note WHERE id = ?', [noteId], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      if (results.length === 0) {
        res.status(404).json({ error: 'Note not found' });
      } else {
        res.json(results[0]);
      }
    });
  });
});

app.get('/tags/:noteid', (req, res) => {
  const noteId = req.params.noteid;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    connection.query('SELECT * FROM Tag WHERE noteid = ?', [noteId], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      res.json(results);
    });
  });
});

app.get('/getAttachments/:noteid', (req, res) => {
  const noteId = req.params.noteid;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    connection.query('SELECT id, noteid, name FROM Attachment WHERE noteid = ?', [noteId], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        return res.status(500).json({ error: 'An error occurred' });
      }

      res.json(results);
    });
  });
});


app.use((req, res, next) => {
  res.header('Access-Control-Expose-Headers', 'Content-Disposition');
  next();
});

app.get('/download/:id', (req, res) => {
  const fileId = req.params.id;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    connection.query('SELECT file, file_extension FROM Attachment WHERE id = ?', [fileId], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      if (results.length === 0) {
        res.status(404).json({ error: 'File not found' });
      } else {
        const fileData = results[0].file;
        const fileExtension = results[0].file_extension;
        console.log('File extension:', fileExtension);
        let contentType = 'application/octet-stream';

        if (fileExtension === '.pdf') {
          contentType = 'application/pdf';
        } else if (fileExtension === '.jpg' || fileExtension === '.jpeg') {
          contentType = 'image/jpeg';
        } else if (fileExtension === '.png') {
          contentType = 'image/png';
        }

        res.setHeader('Content-Disposition', `attachment; filename="file${fileId}${fileExtension}"`);
        console.log('Content-Disposition Header:', res.getHeader('Content-Disposition'));

        res.setHeader('Content-Type', contentType);
        res.send(fileData);
      }
    });
  });
});


app.use(express.urlencoded({ extended: true }));

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).send('An error occurred');
      return;
    }

    connection.query('INSERT INTO Student (name, email, password) VALUES (?, ?, ?)', [name, email, password], (queryError) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).send('An error occurred');
        return;
      }

      res.send('User registered successfully.');
    });
  });
});

app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).send('An error occurred');
      return;
    }

    connection.query('SELECT id FROM Student WHERE email = ? AND password = ?', [email, password], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).send('An error occurred');
        return;
      }

      if (results.length > 0) {
        const userId = results[0].id;
        console.log('User is logged in');
        res.send({ message: 'User is logged in', userId });
      } else {
        console.log('Wrong email or password');
        res.status(401).send('Wrong email or password');
      }
    });
  });
});

app.use(express.urlencoded({ extended: true }));

app.post('/createNote', (req, res) => {
  const { userid, date, name, text, coursename } = req.body;

  const currentDate = date ? date : new Date().toISOString().split('T')[0];

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).send('An error occurred');
      return;
    }

    connection.query(
      'INSERT INTO Note (userid, name, date, text, coursename) VALUES (?, ?, STR_TO_DATE(?, "%Y-%m-%d"), ?, ?)',
      [userid, name, currentDate, text, coursename],
      (queryError, result) => {
        connection.release();

        if (queryError) {
          console.error('Error executing query:', queryError);
          res.status(500).send('An error occurred');
          return;
        }

        const noteId = result.insertId;

        res.json({ noteId });
      }
    );
  });
});

app.post('/createGroup', (req, res) => {
  const { userid, name } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).send('An error occurred');
      return;
    }

    connection.query(
      'INSERT INTO Studygroup (creatoruserid, name) VALUES (?, ?)',
      [userid, name],
      (queryError, result) => {
        connection.release();

        if (queryError) {
          console.error('Error executing query:', queryError);
          res.status(500).send('An error occurred');
          return;
        }

        const groupId = result.insertId;

        res.json({ groupId });
      }
    );
  });
});

app.post('/addParticipants', (req, res) => {
  const { groupid, useremails } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).send('An error occurred');
      return;
    }

    const userids = [];

    const selectPromises = useremails.map((useremail) => {
      return new Promise((resolve, reject) => {
        connection.query(
          'SELECT id FROM Student WHERE email = ?',
          [useremail],
          (selectError, selectResult) => {
            if (selectError) {
              reject(selectError);
              return;
            }

            if (selectResult.length === 0) {
              reject(`User with email ${useremail} not found`);
              return;
            }

            userids.push(selectResult[0].id);
            resolve();
          }
        );
      });
    });
    Promise.all(selectPromises)
      .then(() => {
        const insertPromises = userids.map((userid) => {
          return new Promise((resolve, reject) => {
            connection.query(
              'INSERT INTO Participant (groupid, userid) VALUES (?, ?)',
              [groupid, userid],
              (insertError, insertResult) => {
                if (insertError) {
                  reject(insertError);
                  return;
                }

                resolve(insertResult.insertId);
              }
            );
          });
        });

        return Promise.all(insertPromises);
      })
      .then((participantIds) => {
        connection.release();
        res.json({ participantIds });
      })
      .catch((error) => {
        connection.release();
        console.error('Error adding participant(s):', error);
        res.status(500).send('An error occurred');
      });
  });
});

app.post('/createGroupnote', (req, res) => {
  const { userid, groupid, name, text } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).send('An error occurred');
      return;
    }

    connection.query(
      'INSERT INTO Groupnote (groupid, name, text) VALUES (?, ?, ?)',
      [groupid, name, text],
      (queryError, result) => {
        connection.release();

        if (queryError) {
          console.error('Error executing query:', queryError);
          res.status(500).send('An error occurred');
          return;
        }

        const groupnoteId = result.insertId;

        res.json({ groupnoteId });
      }
    );
  });
});

app.use(express.urlencoded({ extended: true }));

app.post('/createTag', (req, res) => {
  const { noteid, tagtext } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).send('An error occurred');
      return;
    }

    connection.query('INSERT INTO Tag (noteid, tagtext) VALUES (?, ?)', [noteid, tagtext], (queryError) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).send('An error occurred');
        return;
      }

      res.send('Note created successfully.');
    });
  });
});

app.use(express.urlencoded({ extended: true }));

app.post('/createAttachment', upload.single('file'), (req, res) => {
  const { noteid } = req.body;

  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const name = req.file.originalname;
  const binaryData = fs.readFileSync(req.file.path);
  const originalFileExtension = path.extname(req.file.originalname);

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).send('An error occurred');
      return;
    }

    connection.query('INSERT INTO Attachment (noteid, name, file, file_extension) VALUES (?, ?, ?, ?)', [noteid, name, binaryData, originalFileExtension], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).send('An error occurred');
        return;
      }

      res.send('Attachment created successfully.');
    });
  });
});

app.put('/updatePassword/:userId', (req, res) => {
  const userId = req.params.userId;
  const { newPassword } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    connection.query('UPDATE Student SET password = ? WHERE id = ?', [newPassword, userId], (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      res.json({ message: 'Password updated successfully' });
    });
  });
});

app.put('/updateNote/:noteId', (req, res) => {
  const noteId = req.params.noteId;
  const { text } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    connection.query('UPDATE Note SET text = ? WHERE id = ?', [text, noteId], (queryError, result) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Note not found' });
        return;
      }

      res.json({ message: 'Note text updated successfully' });
    });
  });
});

app.delete('/deleteNote/:noteId', (req, res) => {
  const noteId = req.params.noteId;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting a connection from the pool:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    connection.query('DELETE FROM Note WHERE id = ?', [noteId], (queryError, result) => {
      connection.release();

      if (queryError) {
        console.error('Error executing query:', queryError);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Note not found' });
        return;
      }

      res.json({ message: 'Note deleted successfully' });
    });
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
