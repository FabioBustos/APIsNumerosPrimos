let express = require('Express');
let app = express();
let routers = require('./app/router/routers');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',routers)

describe('AppController (e2e)', () => {


  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
      transform: true,
    }));
    await app.init();
  });

  it('/ (GET) should expect a Json with the prime numbers between 2 and 20', () => {
    return request(app.getHttpServer())
      .get('/get-primos/20')
      .expect(200)
      .expect({
        "primos": [
            19,
            17,
            13,
            11,
            7,
            5,
            3,
            2
        ]
    });
  });
  it('/ (GET) should expect Bad Request when id is less than 2', () => {
    return request(app.getHttpServer())
      .get('/get-primos/1')
      .expect(400)
      .expect({
        "statusCode": 400,
        "message": [
            "id must not be less than 2"
        ],
        "error": "Bad Request"
    });
  });
  it('/ (GET) should expect Bad Request when id is not Number', () => {
    return request(app.getHttpServer())
      .get('/get-primos/test')
      .expect(400)
      .expect({
        "statusCode": 400,
        "message": [
            "id must be an integer number",
            "id must not be less than 2"
        ],
        "error": "Bad Request"
    });
  });
});
