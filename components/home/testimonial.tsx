'use client';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Box, Container, Avatar, Grid, Rating } from '@mui/material';
import { Star } from '@mui/icons-material';

// Define an interface for the testimonial item
interface TestimonialItemProps {
    logo: string;
    name: string;
    text: string;
    author: string;
    role: string;
    rating: number;
}

// Testimonial data
const testimonials: TestimonialItemProps[] = [
    {
        logo: '/images/slide1.jpg',
        name: 'Din&eacute; College',
        text: 'I am highly impressed to work with OculusIT and appreciate your dedication and positive attitude over the past years. Your outstanding customer service has significantly impacted Din&eacute; College positively. I eagerly look forward to our continued partnership and future successes together. Thank you for your hard work and commitment! Together, we make a great team.',
        author: 'Ihab Saleh',
        role: 'Director of Information Technology',
        rating: 5
    },
    {
        logo: '/images/slide1.jpg',
        name: 'University of the Pacific',
        text: 'Partnering with OculusIT has exponentially increased our capabilities when it comes to supporting our student, faculty, and staff community across our Stockton and Sacramento campuses. OculusIT has extensive experience in higher ed, which enabled us to ramp up this service quickly and maintain a true 24 x 7 x 365 support model.',
        author: 'Kevin Lemoine',
        role: 'Information Security Service Desk Manager',
        rating: 5
    },
    {
        logo: '/images/slide1.jpg',
        name: 'Alabama A&M University',
        text: 'Alabama A&M University has been working with OculusIT for a long time, and I have found their team to be great in helping me take things off my plate so that I can focus on core student, faculty, and staff satisfaction. They helped upgrade Banner, apply patches, troubleshoot issues, both during and after business hours. I am happy to recommend them.',
        author: 'Jamarcus Allen',
        role: 'Enterprise Applications Administrator',
        rating: 5
    }
];

// Use the interface in the component props
const TestimonialItem: React.FC<{ item: TestimonialItemProps }> = ({ item }) => {
    return (
        <Paper elevation={3} sx={{ padding: 4, margin: 2, textAlign: 'center' }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={3}>
                    <Avatar alt={item.name} src={item.logo} sx={{ width: 120, height: 120, margin: 'auto' }} />
                </Grid>
                <Grid item xs={12} md={9} sx={{ textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>{item.name}</Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>{item.text}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                        <Rating value={item.rating} readOnly icon={<Star fontSize="inherit" />} emptyIcon={<Star fontSize="inherit" />} />
                    </Box>
                    <Typography variant="body2" sx={{ fontStyle: 'italic' }}>- {item.author}, {item.role}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

const TestimonialCarousel: React.FC = () => {
    return (
        <Container maxWidth="md" sx={{ marginTop: 5, paddingBottom: 5 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 3, fontWeight: 'bold' }}>Testimonials</Typography>
            <Carousel className='py-20' animation='slide' indicators={false} navButtonsAlwaysVisible={true} autoPlay={false}>
                {testimonials.map((item, i) => (
                    <TestimonialItem key={i} item={item} />
                ))}
            </Carousel>
        </Container>
    );
};

export default TestimonialCarousel;
