import React, { useState } from 'react';
import { 
  AlertTriangle, Brain, Gavel, Calendar, Users, 
  Activity, ShieldAlert, Lock, EyeOff
} from 'lucide-react';

// --- ESTILOS (CSS en JS para no necesitar Tailwind) ---
const styles = {
  container: { fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#f8f9fa', minHeight: '100vh', color: '#333' },
  header: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #dc2626', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: '24px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', margin: 0 },
  badge: { backgroundColor: '#fee2e2', color: '#991b1b', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '5px' },
  tabContainer: { display: 'flex', gap: '10px', marginBottom: '20px', overflowX: 'auto', paddingBottom: '5px' },
  button: (isActive) => ({
    padding: '10px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px',
    backgroundColor: isActive ? '#1f2937' : 'white', color: isActive ? 'white' : '#4b5563', boxShadow: isActive ? '0 4px 6px rgba(0,0,0,0.1)' : '0 1px 2px rgba(0,0,0,0.05)', transition: 'all 0.2s'
  }),
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },
  card: { backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb', overflow: 'hidden' },
  cardHeader: { padding: '15px 20px', borderBottom: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  cardBody: { padding: '20px' },
  cardTitle: { margin: 0, fontSize: '18px', fontWeight: '600' },
  tag: { display: 'inline-block', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', backgroundColor: '#eff6ff', color: '#1d4ed8', border: '1px solid #dbeafe', marginTop: '5px' },
  quote: { fontStyle: 'italic', color: '#555', borderLeft: '3px solid #ccc', paddingLeft: '10px', margin: '15px 0', backgroundColor: '#f9fafb', padding: '10px' },
  list: { paddingLeft: '20px', margin: '10px 0', fontSize: '14px', lineHeight: '1.6' },
  timelineItem: { position: 'relative', paddingLeft: '20px', borderLeft: '2px solid #e5e7eb', marginBottom: '20px', paddingBottom: '10px' },
  timelineDot: (color) => ({ position: 'absolute', left: '-6px', top: '0', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: color }),
};

const ForensicDashboard = () => {
  const [activeTab, setActiveTab] = useState('victims');

  // Datos del caso
  const victims = [
    { id: 1, name: "Juan Freddy", age: 9, diagnosis: "Culpa Introyectada / Represión Sexual", abuseType: "Abuso Sexual Reiterado", symptoms: ["Dibuja figura femenina (represión)", "Inhibición severa"], quote: "Me sentía mal cuando ocurría esto, pienso que yo tengo la culpa.", forensic: "Decapullamiento total." },
    { id: 2, name: "José Luis", age: 11, diagnosis: "Refugio en Fantasía / Ansiedad", abuseType: "Tortura Física / Psicológica", symptoms: ["Dibujo de superhéroes (evasión)", "Sueños terroríficos"], quote: "Cada noche sueño feo... me decían 'extraterrestre'.", forensic: "Cicatrices, dormir en baño sin frazada." },
    { id: 3, name: "Sergio", age: 10, diagnosis: "Fijación Traumática / Agresividad", abuseType: "Abuso Sexual (Pares)", symptoms: ["Conducta agresiva defensiva", "Dificultad de adaptación"], quote: "El Josué venía a mi cama y me bajaba mis pantalones.", forensic: "Decapullamiento parcial." },
    { id: 4, name: "Joel", age: 11, diagnosis: "TEPT / Falta de Fortaleza Yoica", abuseType: "Tortura Física (Trípode)", symptoms: ["Ansiedad ante estímulos nuevos", "Odio y rencor"], quote: "En la masa del pan ponían cachinas para que nos atoremos.", forensic: "Cicatrices en hemitórax." }
  ];

  const perpetrators = [
    { name: "Erick (Educador)", role: "Autor Intelectual", profile: "Inmadurez Emocional / Narcisismo", traits: ["Impulsivo y explosivo", "Niega responsabilidad"], analysis: "Usa violencia para compensar inseguridad.", isPrimary: false },
    { name: "Wendy (Educadora)", role: "Cómplice", profile: "Personalidad Dependiente", traits: ["Pensamiento paranoico", "No creíble (Peritaje 2017)"], analysis: "Encubre por dependencia emocional.", isPrimary: false },
    { name: "La 'Pandilla' (Adolescentes)", role: "Brazo Ejecutor", profile: "Corrupción de Menores", traits: ["Pacto de silencio", "Abuso sexual a menores", "Tortura delegada"], analysis: "Víctimas convertidas en victimarios.", isPrimary: true }
  ];

  const timeline = [
    { year: "2009 (Dic)", event: "Primeras evidencias de 'Abuso Deshonesto'.", color: "#ef4444" },
    { year: "2010 (Oct)", event: "1ra Inspección SEDEGES: Alertas de violencia.", color: "#f59e0b" },
    { year: "2010 (14 Dic)", event: "FUGA MASIVA y Denuncias formales.", color: "#b91c1c" },
    { year: "2010 (20-29 Dic)", event: "Confirmación de torturas y pacto de silencio.", color: "#3b82f6" },
    { year: "2011 (Marzo)", event: "Orden judicial para juicio oral.", color: "#6b7280" },
    { year: "2017 (Julio)", event: "Peritaje Forense a Wendy (Caso sigue activo).", color: "#10b981" }
  ];

  return (
    <div style={styles.container}>
      
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>
            <Gavel size={28} color="#dc2626" />
            Expediente Forense: "San Ignacio de Loyola"
          </h1>
          <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
            Casos 648/10 y 688/10 | Cochabamba, Bolivia
          </p>
        </div>
        <div style={styles.badge}>
          <AlertTriangle size={14} /> Gravedad: Extrema
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabContainer}>
        <button onClick={() => setActiveTab('victims')} style={styles.button(activeTab === 'victims')}>
          <Users size={18} /> Víctimas
        </button>
        <button onClick={() => setActiveTab('perpetrators')} style={styles.button(activeTab === 'perpetrators')}>
          <EyeOff size={18} /> Perpetradores
        </button>
        <button onClick={() => setActiveTab('torture')} style={styles.button(activeTab === 'torture')}>
          <ShieldAlert size={18} /> Tortura
        </button>
        <button onClick={() => setActiveTab('timeline')} style={styles.button(activeTab === 'timeline')}>
          <Calendar size={18} /> Cronología
        </button>
      </div>

      {/* Content */}
      <div style={styles.grid}>
        
        {/* VÍCTIMAS */}
        {activeTab === 'victims' && victims.map((victim) => (
          <div key={victim.id} style={{...styles.card, borderTop: '4px solid #3b82f6'}}>
            <div style={styles.cardHeader}>
              <div>
                <h3 style={styles.cardTitle}>{victim.name}</h3>
                <span style={{fontSize: '13px', color: '#777'}}>{victim.age} Años</span>
              </div>
              <Brain size={24} color="#3b82f6" />
            </div>
            <div style={styles.cardBody}>
              <div style={{marginBottom: '10px'}}>
                <strong style={{fontSize: '12px', color: '#999', textTransform: 'uppercase'}}>Diagnóstico:</strong>
                <div style={{fontWeight: '600'}}>{victim.diagnosis}</div>
              </div>
              <span style={styles.tag}>{victim.abuseType}</span>
              <div style={styles.quote}>"{victim.quote}"</div>
              <div style={{borderTop: '1px solid #eee', paddingTop: '10px'}}>
                 <strong style={{fontSize: '12px', color: '#dc2626'}}>Evidencia Forense:</strong>
                 <ul style={styles.list}>
                   {victim.symptoms.map((s, i) => <li key={i}>{s}</li>)}
                   <li style={{color: '#dc2626', fontWeight: 'bold'}}>{victim.forensic}</li>
                 </ul>
              </div>
            </div>
          </div>
        ))}

        {/* PERPETRADORES */}
        {activeTab === 'perpetrators' && perpetrators.map((perp, index) => (
          <div key={index} style={{
            ...styles.card, 
            backgroundColor: perp.isPrimary ? '#1f2937' : 'white',
            color: perp.isPrimary ? 'white' : '#333'
          }}>
            <div style={{...styles.cardHeader, borderBottomColor: perp.isPrimary ? '#374151' : '#f3f4f6'}}>
              <h3 style={styles.cardTitle}>{perp.name}</h3>
              <span style={{fontSize: '12px', opacity: 0.7}}>{perp.role}</span>
            </div>
            <div style={styles.cardBody}>
              <div style={{backgroundColor: perp.isPrimary ? '#374151' : '#fff7ed', padding: '10px', borderRadius: '6px', marginBottom: '15px', color: perp.isPrimary ? 'white' : '#9a3412'}}>
                <strong>Perfil:</strong> {perp.profile}
              </div>
              <ul style={{paddingLeft: '20px', fontSize: '14px'}}>
                {perp.traits.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
              <p style={{fontSize: '13px', fontStyle: 'italic', marginTop: '15px', opacity: 0.8}}>
                Análisis: {perp.analysis}
              </p>
            </div>
          </div>
        ))}

        {/* TORTURA */}
        {activeTab === 'torture' && (
          <>
            <div style={{...styles.card, borderLeft: '5px solid #991b1b', gridColumn: 'span 2'}}>
               <div style={styles.cardHeader}>
                  <h3 style={styles.cardTitle}>Castigos Físicos ("Tortura")</h3>
                  <Lock color="#991b1b" />
               </div>
               <div style={styles.cardBody}>
                  <ul style={{listStyle: 'none', padding: 0}}>
                    <li style={{marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #eee'}}>
                      <strong style={{color: '#991b1b', fontSize: '16px'}}>El Chancho / Trípode:</strong>
                      <p style={{margin: '5px 0'}}>Posiciones forzadas extremas (cabeza al suelo, brazos atrás) mantenidas por horas. Causa desorientación y dolor muscular severo.</p>
                    </li>
                    <li>
                      <strong style={{color: '#991b1b', fontSize: '16px'}}>Giro Forzado:</strong>
                      <p style={{margin: '5px 0'}}>Obligar al niño a dar vueltas sobre un dedo en el suelo sin levantarlo hasta provocar el vómito.</p>
                    </li>
                  </ul>
               </div>
            </div>
             <div style={{...styles.card, borderLeft: '5px solid #6b21a8'}}>
               <div style={styles.cardHeader}>
                  <h3 style={styles.cardTitle}>Violencia Psicológica</h3>
                  <EyeOff color="#6b21a8" />
               </div>
               <div style={styles.cardBody}>
                 <div style={{marginBottom: '10px'}}>
                   <strong>Sadismo ("Cachinas"):</strong>
                   <p>Adolescentes ponían canicas en el pan para romper dientes o asfixiar.</p>
                 </div>
                 <div>
                   <strong>Corrupción:</strong>
                   <p>Encierro forzado para ver pornografía bajo amenaza de golpes.</p>
                 </div>
               </div>
            </div>
          </>
        )}

        {/* CRONOLOGÍA */}
        {activeTab === 'timeline' && (
          <div style={{...styles.card, gridColumn: '1 / -1'}}>
            <div style={styles.cardHeader}>
               <h3 style={styles.cardTitle}>Línea de Tiempo del Caso</h3>
               <Calendar />
            </div>
            <div style={styles.cardBody}>
              {timeline.map((t, i) => (
                <div key={i} style={styles.timelineItem}>
                   <div style={styles.timelineDot(t.color)}></div>
                   <span style={{fontWeight: 'bold', marginRight: '15px', color: '#555'}}>{t.year}</span>
                   <span>{t.event}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ForensicDashboard;