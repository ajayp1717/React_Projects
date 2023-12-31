import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ToDoItem({todo,removeTodo,toggleTodo}) {
    return (
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={todo.checked}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': todo.id }}
                onChange={toggleTodo}
              />
            </ListItemIcon>
            <ListItemText id={todo.id} primary={todo.text} />
          </ListItemButton>
        </ListItem>
      );
}