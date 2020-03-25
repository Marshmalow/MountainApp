export class Rows
{
    id: number;
    name: string;
    height: number;
    continent: string;
    country: string;

    constructor(id, name, height, continent, country)
    {
        this.id = id;
        this.name = name;
        this.height = height;
        this.continent = continent;
        this.country = country;
    }
}