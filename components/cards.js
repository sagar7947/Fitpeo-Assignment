import React from 'react'

const cards = () => {
  return (
    <React.Fragment>
        <h1>Welcome to my channel</h1>
        <div className="container text-center">
  <div className="row">
    <div className="col">
    <div class="card" >
  <img src="https://picsum.photos/id/237/200/300" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card">
  <img src="https://picsum.photos/id/237/200/300" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card">
  <img src="https://picsum.photos/id/237/200/300" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
    </React.Fragment>
  )
}

export default cards