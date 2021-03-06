import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore
} from '@angular/fire/firestore';

export interface Speaker {
  id: string;
  name: string;
  bio: string;
  company: string;
  companyLogo: string;
  country: string;
  featured: boolean;
  photoUrl: string;
  shortBio: string;
  title: string;
  socials: string;
}

export interface Team {
  id: string;
  name: string;
  photoUrl: string;
  socials: Social;
}

export interface Social {
  twitter: string;
  facebook: string;
  linkedin: string;
  personal: string;
}

export interface Sponsor {
  id: number;
  logoUrl: string;
  name: string;
  url: string;
}

export interface Session {
  id: number;
  description: string;
  image: string;
  title: string;
  talks: Talk[];
}

export interface Talk {
  title: string;
  speaker: Speaker;
  summary: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private afs: AngularFirestore) {}

  getSpeakers() {
    const speakersCollection = this.afs.collection<Speaker>('speakers');
    return speakersCollection.valueChanges();
  }
  getSponsors() {
    const sponsorsCollection = this.afs.collection<Sponsor>('sponsors');
    return sponsorsCollection.valueChanges();
  }

  getTeam() {
    const teamCollection = this.afs.collection<Team>('team');
    return teamCollection.valueChanges();
  }

  getSessions() {
    const sessionsCollection = this.afs.collection<Session>('sessions');
    return sessionsCollection.valueChanges();
  }

  getTalks() {
    const talksCollection = this.afs.collection<Talk>('talks');
    return talksCollection.valueChanges();
  }
}
