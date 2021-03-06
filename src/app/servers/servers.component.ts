import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverName = 'Test Server'
  serverCreationStatus = 'No server was created!';
  servers = ['TestServer', 'TestServer2']

  constructor() {
    setTimeout(() => this.allowNewServer = true, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is: ' + this.serverName;
  }
}
