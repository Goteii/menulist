import {GenresProps, MusiciansProps, BandsProps} from "./models";
export {genres, bands, musicians};

 const genres: GenresProps[] = [
	{
		id: 1,
		name: 'rock',
		bands: [1,2]
	},
	{
		id: 2,
		name: 'pop',
		bands: [3,4]
	},
];
 const bands: BandsProps[] = [
	{
		id: 1,
		name: 'rock band1',
		musicians: [1,2]
	},
	{
		id: 2,
		name: 'rock band2',
		musicians: [3,4]
	},
	{
		id: 3,
		name: 'pop band1',
		musicians: [5,6]
	},
	{
		id: 4,
		name: 'pop band2',
		musicians: [7,8]
	},
];
 const musicians: MusiciansProps[] = [
	{
		id: 1,
		name: 'rock guy1',
	},
	{
		id: 2,
		name: 'rock guy2',
	},
	{
		id: 3,
		name: 'rock guy3',
	},
	{
		id: 4,
		name: 'rock guy4',
	},
	{
		id: 5,
		name: 'pop guy1',
	},
	{
		id: 6,
		name: 'pop guy2',
	},
	{
		id: 7,
		name: 'pop guy3',
	},
	{
		id: 8,
		name: 'pop guy4',
	},
];