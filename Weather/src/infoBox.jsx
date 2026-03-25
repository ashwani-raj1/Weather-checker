import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";

export default function InfoBox({info}){

    const url = "https://media.istockphoto.com/id/182493016/photo/sky-and-grass-backround.webp?a=1&b=1&s=612x612&w=0&k=20&c=W8npbDXk84kLFhMIyCB5ZLu3vzTPQLWJpCSCAfUCWK0=";

    return(
        <div>
            <div className='info-box'>
            <Card sx={{ maxWidth: 345 }} style={{textAlign: 'center'}}>
            <CardMedia
                sx={{ height: 140 }}
                image={url}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.searched_city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Tempreture: {info.temp}<br></br>
                Feels Like: {info.feelsLike}<br></br>
                Humidity: {info.humidity}<br></br>
                Time: {info.time}<br></br>
                Time Zone: {info.timeZone}
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}