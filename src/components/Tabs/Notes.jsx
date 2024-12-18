import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";

export default function NotesApp() {
  const [newNote, setNewNote] = useState("");
  const [selectedLecture, setSelectedLecture] = useState("All lectures");
  const [sortBy, setSortBy] = useState("Most recent");
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage whenever notes are updated
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Handle adding a new note
  const handleAddNote = () => {
    if (newNote.trim()) {
      const note = {
        id: Date.now(),
        text: newNote,
        lecture: selectedLecture,
        date: new Date().toLocaleString(),
      };
      setNotes((prev) => [note, ...prev]);
      setNewNote("");
    }
  };

  return (
    <>
      <Box display="flex" alignItems="center" gap={1} mb={2}>
        <TextField
          fullWidth
          size="small"
          placeholder="Create a new note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAddNote}
        >
          Add
        </Button>
      </Box>

      {/* Dropdown Filters */}
      <Box display="flex" justifyContent="space-between" gap={2} mb={2}>
        <FormControl size="small" fullWidth>
          <InputLabel>All lectures</InputLabel>
          <Select
            value={selectedLecture}
            label="All lectures"
            onChange={(e) => setSelectedLecture(e.target.value)}
            MenuProps={{ disableScrollLock: true }}
          >
            <MenuItem value="All lectures">All lectures</MenuItem>
            <MenuItem value="Lecture 1">Lecture 1</MenuItem>
            <MenuItem value="Lecture 2">Lecture 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" fullWidth>
          <InputLabel>Sort by</InputLabel>
          <Select
            value={sortBy}
            label="Sort by"
            onChange={(e) => setSortBy(e.target.value)}
            MenuProps={{ disableScrollLock: true }}
          >
            <MenuItem value="Most recent">Most recent</MenuItem>
            <MenuItem value="Oldest">Oldest</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Notes Display Section */}
      <Paper sx={{ maxHeight: "300px", overflow: "auto", p: 2 }}>
        <Typography variant="h6" mb={1}>
          Notes List
        </Typography>
        {notes.length > 0 ? (
          <List>
            {notes.map((note) => (
              <ListItem
                key={note.id}
              >
                <ListItemButton>
                  <ListItemText
                    primary={note.text}
                    secondary={`Lecture: ${note.lecture} | Date: ${note.date}`}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography color="textSecondary">
            No notes available. Start adding notes!
          </Typography>
        )}
      </Paper>
    </>
  );
}
