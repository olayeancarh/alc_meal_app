// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';

// chai.request('http://localhost:8001');
import app from '../index';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Meals', () => {
  // Test to get all meals
  it('should get all meals', (done) => {
    chai.request(app)
      .get('/api/v1/meals')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  // Test to get a single meal
  it('should get a meal by id', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/meals/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  // Test to add a single meal
  it('should add a meal', (done) => {
    const meal = {
      name: 'Ewa Agoin',
      size: 'Small',
      price: 350,
    };
    chai.request(app)
      .post('/api/v1/meals')
      .send(meal)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('name');
        res.body.data.should.have.property('size');
        res.body.data.should.have.property('price');
        done();
      });
  });

  // Test to update meal
  it('should update meal', (done) => {
    const id = 1;
    const meal = {
      name: 'Ewa Agoin',
      size: 'Small',
      price: 350,
    };
    chai.request(app)
      .post(`/api/v1/meals/${id}`)
      .send(meal)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('name');
        res.body.data.should.have.property('size');
        res.body.data.should.have.property('price');
        done();
      });
  });

  // Test to delete meal
  it('should delete meal', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/meals/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.have.property('id');
        done();
      });
  });
});

describe('Menus', () => {
  // Test to get all menus
  it('should get all menus', (done) => {
    chai.request(app)
      .get('/api/v1/menus')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  // Test to get a single meenu
  it('should get a menu by id', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/menus/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  // Test to add a single menu
  it('should add a menu', (done) => {
    const menu = {
      name: 'Mashed potatoes & egg',
      size: 'Medium',
      price: 700,
    };
    chai.request(app)
      .post('/api/v1/menus')
      .send(menu)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('name');
        res.body.data.should.have.property('size');
        res.body.data.should.have.property('price');
        done();
      });
  });

  // Test to update menu
  it('should update menu', (done) => {
    const id = 1;
    const menu = {
      name: 'Ewa Agoin',
      size: 'Small',
      price: 350,
    };
    chai.request(app)
      .post(`/api/v1/menus/${id}`)
      .send(menu)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('name');
        res.body.data.should.have.property('size');
        res.body.data.should.have.property('price');
        done();
      });
  });

  // Test to delete menu
  it('should delete menu', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/menus/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.have.property('id');
        done();
      });
  });
});

describe('Orders', () => {
  // Test to get all orders
  it('should get all orders', (done) => {
    chai.request(app)
      .get('/api/v1/orders')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  // Test to get a single meenu
  it('should get a order by id', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/orders/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  // Test to add a single order
  it('should add a order', (done) => {
    const order = {
      orderItem: 'Beans & Bread',
      dateOrdered: 'Mon Feb 18 2019 09:14:16 ',
      orderPrice: 300,
    };
    chai.request(app)
      .post('/api/v1/orders')
      .send(order)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('orderItem');
        res.body.data.should.have.property('dateOrdered');
        res.body.data.should.have.property('orderPrice');
        done();
      });
  });

  // Test to update order
  it('should update order', (done) => {
    const id = 1;
    const order = {
      orderItem: 'Beans & Bread',
      dateOrdered: 'Mon Feb 18 2019 09:14:16 ',
      orderPrice: 300,
    };
    chai.request(app)
      .post(`/api/v1/orders/${id}`)
      .send(order)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('orderItem');
        res.body.data.should.have.property('dateOrdered');
        res.body.data.should.have.property('orderPrice');
        done();
      });
  });

  // Test to delete order
  it('should delete order', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/orders/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.have.property('id');
        done();
      });
  });
});
