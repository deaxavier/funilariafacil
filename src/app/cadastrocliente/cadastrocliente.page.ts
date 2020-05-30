import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cadastrocliente",
  templateUrl: "./cadastrocliente.page.html",
  styleUrls: ["./cadastrocliente.page.scss"],
})
export class CadastroclientePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  veiculo() {
    this.router.navigate(["cadastroveiculo"]);
  }
}
