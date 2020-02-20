import React from 'react';
import { GridList, GridListTile, GridListTileBar, Grid, Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider, Typography } from '@material-ui/core'
import AppContext, { Player } from '../context/AppContext';

const PlayerDisplay: React.FC<{ player: Player }> = ({ player }) => {
    const dim = '4rem';
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar style={{ height: dim, width: dim, marginRight:'0.5rem' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primaryTypographyProps={{ style: { textTransform: 'uppercase' } }}
                primary={player.role}
                secondary={player.name}
            />
        </ListItem>
    );
}

const Main = () => {
    const { champions, teams } = React.useContext(AppContext);
    return (
        <Grid container>
            <Grid item md={2}>
                <List>
                    {teams.blue.map((player, i) =>
                        <>
                            <PlayerDisplay key={player.name} player={player} />
                            {i < teams.blue.length - 1 && <Divider variant="middle" component="li" />}
                        </>
                    )}
                </List>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item md={6}>
                <GridList spacing={50} cols={6}>
                    {Object.values(champions).map(champ => (
                        <GridListTile key={champ.key}>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/10.4.1/img/champion/${champ.image.full}`} alt={champ.name} />
                            <GridListTileBar title={champ.name} style={{ textAlign: 'center' }} />
                        </GridListTile>
                    ))}
                </GridList>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item md={2}>
                Nonce
            </Grid>
        </Grid>
    );
}

export default Main;